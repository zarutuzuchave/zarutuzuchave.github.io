import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateListingData {
  listing_insert: Listing_Key;
}

export interface CreateListingVariables {
  title: string;
  description: string;
  category: string;
  status: string;
  ownerId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  uid: string;
  displayName: string;
  zipCode: string;
}

export interface GetUserListingsData {
  listings: ({
    title: string;
    description: string;
    category: string;
    status: string;
  })[];
}

export interface GetUserListingsVariables {
  ownerId: UUIDString;
}

export interface Listing_Key {
  id: UUIDString;
  __typename?: 'Listing_Key';
}

export interface Message_Key {
  id: UUIDString;
  __typename?: 'Message_Key';
}

export interface Request_Key {
  id: UUIDString;
  __typename?: 'Request_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface SendMessageData {
  message_insert: Message_Key;
}

export interface SendMessageVariables {
  content: string;
  senderId: UUIDString;
  receiverId: UUIDString;
  listingId: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateListingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateListingVariables): MutationRef<CreateListingData, CreateListingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateListingVariables): MutationRef<CreateListingData, CreateListingVariables>;
  operationName: string;
}
export const createListingRef: CreateListingRef;

export function createListing(vars: CreateListingVariables): MutationPromise<CreateListingData, CreateListingVariables>;
export function createListing(dc: DataConnect, vars: CreateListingVariables): MutationPromise<CreateListingData, CreateListingVariables>;

interface GetUserListingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
  operationName: string;
}
export const getUserListingsRef: GetUserListingsRef;

export function getUserListings(vars: GetUserListingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserListingsData, GetUserListingsVariables>;
export function getUserListings(dc: DataConnect, vars: GetUserListingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

interface SendMessageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
  operationName: string;
}
export const sendMessageRef: SendMessageRef;

export function sendMessage(vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;
export function sendMessage(dc: DataConnect, vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

