import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: PropertyId;
    title: string;
    featured: boolean;
    propertyType: PropertyType;
    bedrooms?: bigint;
    description: string;
    amenities: Array<string>;
    builderTag: string;
    areaSqft: bigint;
    bathrooms?: bigint;
    price: string;
    location: string;
}
export type SubmitInquiryResult = {
    __kind__: "ok";
    ok: InquiryId;
} | {
    __kind__: "err";
    err: string;
};
export type InquiryId = bigint;
export type PropertyId = bigint;
export enum PropertyType {
    commercial = "commercial",
    villa = "villa",
    plot = "plot",
    apartment = "apartment"
}
export interface backendInterface {
    getFeaturedProperties(): Promise<Array<Property>>;
    getProperties(): Promise<Array<Property>>;
    getProperty(id: PropertyId): Promise<Property | null>;
    submitInquiry(name: string, phone: string, propertyInterest: string, message: string, propertyId: PropertyId | null): Promise<SubmitInquiryResult>;
}
