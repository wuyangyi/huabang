

export type FetchFn<T> = (params?: Partial<T>) => Promise<unknown>;

export type LimitTypeParams = {
    type?: string;
    page: number;
    limit: number;
} & Record<string, any>;

export type LimitIdParams = {
    id?: string;
    page: number;
    limit: number;
} & Record<string, any>;