export interface Card {
  name: string,
  card_type: number,
  color: number,
  soul: number,
  cost: number,
  level: number,
  power: number,
  text: string,
  traits: string,
  set_code: string,
  game: string,
  triggers: Array<string>,
  title_code: string,
  _id: string,
  image_url: string
}
