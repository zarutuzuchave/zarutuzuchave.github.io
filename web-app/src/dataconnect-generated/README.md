# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUserListings*](#getuserlistings)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateListing*](#createlisting)
  - [*SendMessage*](#sendmessage)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUserListings
You can execute the `GetUserListings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserListings(vars: GetUserListingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

interface GetUserListingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
}
export const getUserListingsRef: GetUserListingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserListings(dc: DataConnect, vars: GetUserListingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

interface GetUserListingsRef {
  ...
  (dc: DataConnect, vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
}
export const getUserListingsRef: GetUserListingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserListingsRef:
```typescript
const name = getUserListingsRef.operationName;
console.log(name);
```

### Variables
The `GetUserListings` query requires an argument of type `GetUserListingsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserListingsVariables {
  ownerId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserListings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserListingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserListingsData {
  listings: ({
    title: string;
    description: string;
    category: string;
    status: string;
  })[];
}
```
### Using `GetUserListings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserListings, GetUserListingsVariables } from '@dataconnect/generated';

// The `GetUserListings` query requires an argument of type `GetUserListingsVariables`:
const getUserListingsVars: GetUserListingsVariables = {
  ownerId: ..., 
};

// Call the `getUserListings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserListings(getUserListingsVars);
// Variables can be defined inline as well.
const { data } = await getUserListings({ ownerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserListings(dataConnect, getUserListingsVars);

console.log(data.listings);

// Or, you can use the `Promise` API.
getUserListings(getUserListingsVars).then((response) => {
  const data = response.data;
  console.log(data.listings);
});
```

### Using `GetUserListings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserListingsRef, GetUserListingsVariables } from '@dataconnect/generated';

// The `GetUserListings` query requires an argument of type `GetUserListingsVariables`:
const getUserListingsVars: GetUserListingsVariables = {
  ownerId: ..., 
};

// Call the `getUserListingsRef()` function to get a reference to the query.
const ref = getUserListingsRef(getUserListingsVars);
// Variables can be defined inline as well.
const ref = getUserListingsRef({ ownerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserListingsRef(dataConnect, getUserListingsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.listings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.listings);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  uid: string;
  displayName: string;
  zipCode: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  uid: ..., 
  displayName: ..., 
  zipCode: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ uid: ..., displayName: ..., zipCode: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  uid: ..., 
  displayName: ..., 
  zipCode: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ uid: ..., displayName: ..., zipCode: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateListing
You can execute the `CreateListing` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createListing(vars: CreateListingVariables): MutationPromise<CreateListingData, CreateListingVariables>;

interface CreateListingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateListingVariables): MutationRef<CreateListingData, CreateListingVariables>;
}
export const createListingRef: CreateListingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createListing(dc: DataConnect, vars: CreateListingVariables): MutationPromise<CreateListingData, CreateListingVariables>;

interface CreateListingRef {
  ...
  (dc: DataConnect, vars: CreateListingVariables): MutationRef<CreateListingData, CreateListingVariables>;
}
export const createListingRef: CreateListingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createListingRef:
```typescript
const name = createListingRef.operationName;
console.log(name);
```

### Variables
The `CreateListing` mutation requires an argument of type `CreateListingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateListingVariables {
  title: string;
  description: string;
  category: string;
  status: string;
  ownerId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateListing` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateListingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateListingData {
  listing_insert: Listing_Key;
}
```
### Using `CreateListing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createListing, CreateListingVariables } from '@dataconnect/generated';

// The `CreateListing` mutation requires an argument of type `CreateListingVariables`:
const createListingVars: CreateListingVariables = {
  title: ..., 
  description: ..., 
  category: ..., 
  status: ..., 
  ownerId: ..., 
};

// Call the `createListing()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createListing(createListingVars);
// Variables can be defined inline as well.
const { data } = await createListing({ title: ..., description: ..., category: ..., status: ..., ownerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createListing(dataConnect, createListingVars);

console.log(data.listing_insert);

// Or, you can use the `Promise` API.
createListing(createListingVars).then((response) => {
  const data = response.data;
  console.log(data.listing_insert);
});
```

### Using `CreateListing`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createListingRef, CreateListingVariables } from '@dataconnect/generated';

// The `CreateListing` mutation requires an argument of type `CreateListingVariables`:
const createListingVars: CreateListingVariables = {
  title: ..., 
  description: ..., 
  category: ..., 
  status: ..., 
  ownerId: ..., 
};

// Call the `createListingRef()` function to get a reference to the mutation.
const ref = createListingRef(createListingVars);
// Variables can be defined inline as well.
const ref = createListingRef({ title: ..., description: ..., category: ..., status: ..., ownerId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createListingRef(dataConnect, createListingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.listing_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.listing_insert);
});
```

## SendMessage
You can execute the `SendMessage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
sendMessage(vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

interface SendMessageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
}
export const sendMessageRef: SendMessageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
sendMessage(dc: DataConnect, vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

interface SendMessageRef {
  ...
  (dc: DataConnect, vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
}
export const sendMessageRef: SendMessageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the sendMessageRef:
```typescript
const name = sendMessageRef.operationName;
console.log(name);
```

### Variables
The `SendMessage` mutation requires an argument of type `SendMessageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SendMessageVariables {
  content: string;
  senderId: UUIDString;
  receiverId: UUIDString;
  listingId: UUIDString;
}
```
### Return Type
Recall that executing the `SendMessage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SendMessageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SendMessageData {
  message_insert: Message_Key;
}
```
### Using `SendMessage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, sendMessage, SendMessageVariables } from '@dataconnect/generated';

// The `SendMessage` mutation requires an argument of type `SendMessageVariables`:
const sendMessageVars: SendMessageVariables = {
  content: ..., 
  senderId: ..., 
  receiverId: ..., 
  listingId: ..., 
};

// Call the `sendMessage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await sendMessage(sendMessageVars);
// Variables can be defined inline as well.
const { data } = await sendMessage({ content: ..., senderId: ..., receiverId: ..., listingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await sendMessage(dataConnect, sendMessageVars);

console.log(data.message_insert);

// Or, you can use the `Promise` API.
sendMessage(sendMessageVars).then((response) => {
  const data = response.data;
  console.log(data.message_insert);
});
```

### Using `SendMessage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, sendMessageRef, SendMessageVariables } from '@dataconnect/generated';

// The `SendMessage` mutation requires an argument of type `SendMessageVariables`:
const sendMessageVars: SendMessageVariables = {
  content: ..., 
  senderId: ..., 
  receiverId: ..., 
  listingId: ..., 
};

// Call the `sendMessageRef()` function to get a reference to the mutation.
const ref = sendMessageRef(sendMessageVars);
// Variables can be defined inline as well.
const ref = sendMessageRef({ content: ..., senderId: ..., receiverId: ..., listingId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = sendMessageRef(dataConnect, sendMessageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.message_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.message_insert);
});
```

