// КОМПОНЕНТЫ БАЗОВЫХ КЛАССОВ

/// Типы для реализации базового класса событий
export type EventName = string | RegExp;
export type Subscriber = Function;
export type EmitterEvent = {
	eventName: string;
	data: unknown;
};

/// Общие методы работы с событиями
export interface IEvents {
	on<T extends object>(event: EventName, callback: (data: T) => void): void;
	emit<T extends object>(event: string, data?: T): void;
	trigger<T extends object>(
		event: string,
		context?: Partial<T>
	): (data: T) => void;
}

/// Данные ответа от сервера
export type ApiListResponse<Type> = {
	total: number;
	items: Type[];
};

/// Методы запросов к серверу
export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

// КОМПОНЕНТЫ БИЗНЕС ЛОГИКИ

/// Состояние приложения
export interface IAppState {
	catalog: IProduct[]; // Каталог продуктов
	basket: IProduct[]; // Корзина
	preview: string | null; // Предпросмотр продукта
	delivery: IDeliveryForm | null; // Данные о доставке
	contact: IContactForm | null; // Контактные данные
	order: IOrder | null; // Данные заказа
}

/// Действия, передаваемые в конструктор
export interface IActions {
	onClick: (event: MouseEvent) => void; // Обработчик клика
}

/// Действия, передаваемые в конструктор успешного заказа
export interface ISuccessActions {
	onClick: () => void; // Обработчик клика
}

/// Информация о доставке
export interface IDeliveryForm {
	payment: string; // Способ оплаты
	address: string; // Адрес доставки
}

/// Контактная информация
export interface IContactForm {
	email: string; // Email
	phone: string; // Телефон
}

/// Данные заказа
export interface IOrder extends IDeliveryForm, IContactForm {
	total: number; // Общая стоимость
	items: string[]; // Список товаров
}

/// Данные ответа сервера о заказе
export interface IOrderResult {
	id: string; // ID заказа
	total: number; // Общая стоимость заказа
}

// КОМПОНЕНТЫ VIEW 
/// Данные для отображения главной страницы
export interface IPage {
	counter: number; // Счетчик
	catalog: HTMLElement[]; // Элементы каталога
}

/// Данные о продукте
export interface IProduct {
	id: string; // ID продукта
	title: string; // Название
	price: number | null; // Цена
	description: string; // Описание
	category: string; // Категория
	image: string; // Изображение
}

/// Данные для отображения карточки товара
export interface ICard extends IProduct {
	index?: string; // Индекс
	buttonTitle?: string; // Название кнопки
}

/// Данные для отображения в модальном окне
export interface IModalData {
	content: HTMLElement; // Содержимое модального окна
}

/// Данные о состоянии формы
export interface IFormState {
	valid: boolean; // Валидность формы
	errors: string[]; // Ошибки формы
}

/// Данные для отображения корзины
export interface IBasketView {
	items: HTMLElement[]; // Элементы
	total: number; // Общая стоимость
}

/// Данные для отображения успешного заказа
export interface ISuccess {
	total: number; // Общая стоимость
}

/// Ошибки формы
export type FormErrors = Partial<Record<keyof IOrder, string>>; // Ошибки формы

/// Данные о состоянии формы
export interface IFormState {
	valid: boolean; // Валидность формы
	errors: string[]; // Ошибки формы
}