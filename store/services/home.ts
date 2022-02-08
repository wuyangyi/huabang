import request from '../../utils/api';
import Url from '../../utils/url';
import type { UserBean } from './user';

export type Res<T> = {
  status: number;
  message: string;
  need_decrypt: boolean;
  data: T;
};

export type NameIdBean = {
  id: number;
  name: string;
}