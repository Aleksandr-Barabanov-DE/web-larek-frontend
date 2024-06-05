export const API_URL = `https://larek-api.nomoreparties.co/api/weblarek`;
export const CDN_URL = `https://larek-api.nomoreparties.co/content/weblarek`;

export const settings = {};

export const categoryClasses: { [key: string]: string } = {
	'софт-скил':'card__category_softSkill',
	'хард-скил': 'card__category_hardSkill',
	кнопка: 'card__category_button',
	дополнительное: 'card__category_additional',
	другое: 'card__category_other',
};

export const PaymentMethods: { [key: string]: string } = {
	card: 'online',
	cash: 'cash',
};
