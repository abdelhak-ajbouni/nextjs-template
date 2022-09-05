import type { NextPage } from "next";
import type { AppType, NextComponentType } from "next/dist/shared/lib/utils";

export type NextComponentTypeWithLayout = NextComponentType & {
  layout: React.ElementType
};  

export interface NextPageWithLayout extends NextPage {
  layout?: any
}
