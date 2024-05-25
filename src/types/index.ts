

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

// Отрисовка главной старницы
export interface IProductItem {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IActions {
  onClick: (event: MouseEvent) => void;
}

export interface ILarekApi {
  cdn: string;
  items: IProductItem[];
  getListProductCard: () => Promise<IProductItem[]>;
  postOrderLot: (order: IOrderLot) => Promise<IOrderResult>;
}

// Корзина с товарами
export interface IBasketModel {
  basketProducts: IProductItem[];
  getCounter: () => number;
  getSumAll: () => number;
  setSelectedСard(data: IProductItem): void;
  deleteCardFromBasket(item: IProductItem): void;
  clearBasket(): void
}

// Модели Карточек
export interface IDataModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void;
}

// Данные пользователя
export interface IFormModel {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
  setOrderAddress(field: string, value: string): void
  validateOrder(): boolean;
  setOrderData(field: string, value: string): void
  validateContacts(): boolean;
  getOrderLot(): object;
}

// КОМПОНЕНТЫ ПРЕДСТАВЛЕНИЯ

// Модальные окна 

export interface IModal {
  open(): void;
  close(): void;
  render(): HTMLElement
}
/// Данные для отображения внутри модального окна
export interface IModalData {
	content: HTMLElement;
}


// Корзина с товарами 

export interface IBasket {
  basket: HTMLElement;
  title: HTMLElement;
  basketList: HTMLElement;
  button: HTMLButtonElement;
  basketPrice: HTMLElement;
  headerBasketButton: HTMLButtonElement;
  headerBasketCounter: HTMLElement;
  renderHeaderBasketCounter(value: number): void;
  renderSumAll(sumAll: number): void;
  render(): HTMLElement;
}

    // "Элемент корзины"
export interface IBasketItem {
  basketItem: HTMLElement;
	index:HTMLElement;
	title: HTMLElement;
	price: HTMLElement;
	buttonDelete: HTMLButtonElement;
}

//  Карточки товара
export interface ICard {
  сardElement: HTMLElement;
  cardCategory: HTMLElement;
  cardTitle: HTMLElement;
  cardImage: HTMLImageElement;
  cardPrice: HTMLElement;
}

export interface ICardComponent {
  text: HTMLElement;
  button: HTMLElement;
}

// Форма Контактных данных
export interface IContacts {
  formContacts: HTMLFormElement;
  inputAll: HTMLInputElement[];
  buttonSubmit: HTMLButtonElement;
  formErrors: HTMLElement;
  render(): HTMLElement;
}

// Форма с адресом
export interface IOrder {
  formOrder: HTMLFormElement;
  buttonAll: HTMLButtonElement[];
  paymentSelection: String;
  formErrors: HTMLElement;
  render(): HTMLElement;
}



// интерфейс формы заказа
export interface IOrderForm {
  payment?: string;
  address?: string;
  phone?: string;
  email?: string;
  total?: string | number;
  }
  
  
/// Данные о состоянии формы
export interface IFormState {
	valid: boolean;
	errors: string[];
}


  export interface IOrder extends IOrderForm {
    items: string[];
  }
  
  export interface IOrderLot{
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
  }
  
  export interface IOrderResult {
    id: string;
    total: number;
  }
  
    // тип ошибки формы
    export type FormErrors = Partial<Record<keyof IOrder, string>>;
  

  // Форма удачного заказа 
  export interface ISuccess {
    success: HTMLElement;
    description: HTMLElement;
    button: HTMLButtonElement;
    render(total: number): HTMLElement;
  }
  

