import { ReactNode } from "react";

export interface LayoutProps {
    readonly children: ReactNode;
}
export interface FormField {
    id: string;
    label: string;
    type: string;
    span: number;
    options?: string[];
    autoComplete: string;
    placeHolder?: string;
}
export interface FetchData {
    [key: string]: string | null;
}

export interface FetchDataOptions {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: object;
  }