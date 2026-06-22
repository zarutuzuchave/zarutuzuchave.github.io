# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useCreateListing, useGetUserListings, useSendMessage } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateListing(createListingVars);

const { data, isPending, isSuccess, isError, error } = useGetUserListings(getUserListingsVars);

const { data, isPending, isSuccess, isError, error } = useSendMessage(sendMessageVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, createListing, getUserListings, sendMessage } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation CreateListing:  For variables, look at type CreateListingVars in ../index.d.ts
const { data } = await CreateListing(dataConnect, createListingVars);

// Operation GetUserListings:  For variables, look at type GetUserListingsVars in ../index.d.ts
const { data } = await GetUserListings(dataConnect, getUserListingsVars);

// Operation SendMessage:  For variables, look at type SendMessageVars in ../index.d.ts
const { data } = await SendMessage(dataConnect, sendMessageVars);


```