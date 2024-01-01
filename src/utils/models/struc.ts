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
}
export interface FormData {
    [key: string]: string | null;
}