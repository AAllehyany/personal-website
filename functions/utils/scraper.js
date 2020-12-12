const axios = require('axios');
const cheerio = require('cheerio');
const BASE_URL = "https://en.ws-tcg.com/cardlist/list/";
const BUCKET = 'https://s3.us-west-1.wasabisys.com/decks-project/card_images/';


/**
 * Loads the HTML data of the provided card number.
 * @param {string} cardNo set code of the card to start scraping from.
 */
const getHTML = async (cardNo) => {
  try {
      const data = await axios.get(BASE_URL+cardNo);
      return data.data;
  } catch(e) {
      console.log('ERROR', e);
  }
}

/**
 * Gets the TH element containing the text.
 * @param {object} $ cheerio object
 * @param {string} value value to check for.
 */
const getTHContains = ($, value) => {
  return $(`th:contains("${value}")`).first();
}

/**
* Maps card type from string to number
* @param {string} card_type card type in string
* @returns {number} card type in number
*/
const mapCardtype = (card_type) => {
  switch(card_type.toLowerCase()) {
    case 'character': return 0;
    case 'event': return 1;
    case 'climax': return 2;
  }
};

/**
* Maps card color from string to number
* @param {string} color card color in string
* @returns {number} card color in number
*/
const mapColor = (color) => {
  switch(color.toLowerCase()) {
    case 'yellow': return 1;
    case 'green': return 2;
    case 'red': return 3;
    case 'blue': return 4;
  }

  return -1;
}

/**
* A utility function to convert into number, or -1.
* @param {any} val value to convert to number
*/
const toNumber = (val) => {
  const lvl = parseInt(val);
  return isNaN(lvl) ? -1 : lvl;
}


/**
* Extracts the card information from the given HTML page.
* @param {string} page HTML page contents
* @param {object} $ cheerio object
* @returns {object} extracted card object.
*/
const extractCard = async (page, $) => {
  const card = {};


  const cardName = $(getTHContains($, 'Card Name')).next().text().trim().split('\n')[0];
  const set_code = $(getTHContains($, 'Card No')).next().text().trim();
  const rarity = $(getTHContains($, 'Rarity')).next().text().trim();
  const card_type = $(getTHContains($, 'Card Type')).next().text().trim();
  const soul = $(getTHContains($, 'Soul')).next().find('img');
  const triggers = $(getTHContains($, 'Trigger')).next().find('img');
  const level = $(getTHContains($, 'Level')).next().text().trim();
  const cost = $(getTHContains($, 'Cost')).next().text().trim();
  const color = $(getTHContains($, "Color")).next().find('img').attr('src').split('/');
  const power = $(getTHContains($, "Power")).next().text().trim();
  const text = $(getTHContains($, "Text")).next().text().trim();
  const traits = $(getTHContains($, "Attribute")).next().text().trim();
  const img = $('.graphic img').attr('src');
  const imgParts = img.split('/')    
  const title_code = set_code.split('/')[0];

  card.name = cardName;
  card.set_code = set_code;
  card.rarity = rarity;
  card.soul = soul.length || 0;
  card.card_type = mapCardtype(card_type);
  card.level = toNumber(level);
  card.cost = toNumber(cost);
  card.color = mapColor(color[color.length - 1].split('.')[0]);
  card.power = toNumber(power);
  card.text = text;
  card.title_code = title_code;
  card.traits = traits;
  card.game = 'WS';
  const imgName = imgParts[imgParts.length - 1];
  card.image_url = BUCKET + imgName;
  card.triggers = triggers.map((idx, el) => {
      const parts = $(el).attr('src').split('/');
      const trigger = parts[parts.length - 1].split('.')[0];
      return trigger;
  }).get();
  
  //await downloadImage(BASE_URL+img, imgName);

  return card;
}

module.exports = async function(cardNo) {

  const page = await getHTML(cardNo);
  const $ = await cheerio.load(page);
  const cardInfo = extractCard(page, $);
  return cardInfo;

}