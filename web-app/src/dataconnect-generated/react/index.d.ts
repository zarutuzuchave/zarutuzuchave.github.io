import { CreateUserData, CreateUserVariables, CreateListingData, CreateListingVariables, GetUserListingsData, GetUserListingsVariables, SendMessageData, SendMessageVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useCreateListing(options?: useDataConnectMutationOptions<CreateListingData, FirebaseError, CreateListingVariables>): UseDataConnectMutationResult<CreateListingData, CreateListingVariables>;
export function useCreateListing(dc: DataConnect, options?: useDataConnectMutationOptions<CreateListingData, FirebaseError, CreateListingVariables>): UseDataConnectMutationResult<CreateListingData, CreateListingVariables>;

export function useGetUserListings(vars: GetUserListingsVariables, options?: useDataConnectQueryOptions<GetUserListingsData>): UseDataConnectQueryResult<GetUserListingsData, GetUserListingsVariables>;
export function useGetUserListings(dc: DataConnect, vars: GetUserListingsVariables, options?: useDataConnectQueryOptions<GetUserListingsData>): UseDataConnectQueryResult<GetUserListingsData, GetUserListingsVariables>;

export function useSendMessage(options?: useDataConnectMutationOptions<SendMessageData, FirebaseError, SendMessageVariables>): UseDataConnectMutationResult<SendMessageData, SendMessageVariables>;
export function useSendMessage(dc: DataConnect, options?: useDataConnectMutationOptions<SendMessageData, FirebaseError, SendMessageVariables>): UseDataConnectMutationResult<SendMessageData, SendMessageVariables>;
