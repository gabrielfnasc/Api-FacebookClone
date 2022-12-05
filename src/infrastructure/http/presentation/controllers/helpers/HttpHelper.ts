import { ApiError } from '@src/domain/errors';
import { HttpResponse } from '@src/infrastructure/http/presentation/controllers/helpers';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const serverError = (error: Error & Partial<ApiError>): HttpResponse => ({
  statusCode: error.statusCode ?? 500,
  body: error.statusCode ? error.message : 'Internal Server Error',
});
export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});
