/**
 * Generated by orval v6.12.0 🍺
 * Do not edit manually.
 * UiTPAS API
 * With UiTPAS API 4.0 you can retrieve ticket prices and register ticket sales for passholders. You can also save UiTPAS points and exchange them for rewards for a passholder, and much more.
 * OpenAPI spec version: 4.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  GetUitidPassholderRegistrationToken200,
  UnauthorizedResponse,
  ForbiddenResponse,
  Error,
  GetUitidPassholderStatus200,
  Passholder,
  PassholderSelfRegistration,
  PostPassholdersMeCheckin201,
  PostPassholdersMeCheckinBody,
  TransactionsPaginatedCollection,
  GetPassholdersMeTransactionsParams
} from '.././model'


/**
 * This is step 1 of the process to register an UiTPAS passholder in UiTiD using their UiTPAS number and date of birth. It is used to retrieve an UiTiD registration token for the passholder. If the passholder already has a token via an email they received to register in UiTiD, this step can be skipped.

This endpoint uses HTTP Basic Authentication using:
* Username: uitpasNumber 
* Password: dateOfBirth in the form yyyy-mm-dd

In summary, this header should look like: 

```
Authorization: Basic base64(uitpasNumber+dateOfBirth)
```

The response will contain a `token` property that can be used in step 2 of the process, [retrieving the UiTiD registration status](/reference/uitpas.json/paths/~1passholders~1me~1uitid~1status/get).

This caller of this method is identified with [client identification](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NDY5-client-identification) and does not require any permissions, but please note this endpoint is rate-limited on IP address to prevent abuse.
 * @summary Retrieve UiTiD registration token
 */
export const getUitidPassholderRegistrationToken = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetUitidPassholderRegistrationToken200>> => {
    return axios.get(
      `/passholders/me/uitid/registration-token`,options
    );
  }


export const getGetUitidPassholderRegistrationTokenQueryKey = () => [`/passholders/me/uitid/registration-token`];

    
export type GetUitidPassholderRegistrationTokenQueryResult = NonNullable<Awaited<ReturnType<typeof getUitidPassholderRegistrationToken>>>
export type GetUitidPassholderRegistrationTokenQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>

export const useGetUitidPassholderRegistrationToken = <TData = Awaited<ReturnType<typeof getUitidPassholderRegistrationToken>>, TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUitidPassholderRegistrationToken>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUitidPassholderRegistrationTokenQueryKey();

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUitidPassholderRegistrationToken>>> = ({ signal }) => getUitidPassholderRegistrationToken({ signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof getUitidPassholderRegistrationToken>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * Retrieves the UiTiD registration status of a passholder. This is step 2 in the process of registering an UiTPAS passholder in UiTiD.

This endpoint requires a registation token in the `x-registration-token` header. A client can obtain such a token using [`GET /passholders/me/uitid/registration-token`](/reference/uitpas.json/paths/~1passholders~1me~1uitid~1registration-token/get). Alternatively, a token may already be available to the client because the user may have received an email link including it.

Based on the state value, the client can proceed in 2 ways:

- If state is `UNREGISTERED`

The passholder can proceed to step 3, [retrieving the UiTiD email address status](/reference/uitpas.json/paths/~1uitid~1emails~1{email}/get).

The response can include the linked `email` address of the passholder if one is known. This can be used in the next step of the registration process ([`GET /uitid/emails/{email}`](/reference/uitpas.json/paths/~1uitid~1emails~1{email}/get)). If no email address is included, the client should prompt the user to enter their email address first before proceeding to step 3.

- If state is `REGISTERED` 

The passholder is already `REGISTERED` so the user must continue by authenticating instead. The `email` address field contains the email address of the linked UiTiD account that should be used to authenticate.


This caller of this method, identified with [client identification](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NDY5-client-identification) does not require any permissions.
 * @summary Retrieve UiTiD registration status
 */
export const getUitidPassholderStatus = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<GetUitidPassholderStatus200>> => {
    return axios.get(
      `/passholders/me/uitid/status`,options
    );
  }


export const getGetUitidPassholderStatusQueryKey = () => [`/passholders/me/uitid/status`];

    
export type GetUitidPassholderStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getUitidPassholderStatus>>>
export type GetUitidPassholderStatusQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>

export const useGetUitidPassholderStatus = <TData = Awaited<ReturnType<typeof getUitidPassholderStatus>>, TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getUitidPassholderStatus>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUitidPassholderStatusQueryKey();

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUitidPassholderStatus>>> = ({ signal }) => getUitidPassholderStatus({ signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof getUitidPassholderStatus>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * Registers the UiTiD for this passholder. This is step 4, and the final step, in the process of registering an UiTPAS passholder in UiTiD.

This request requires an `Authorization` header with the [user access token](https://docs.publiq.be/docs/authentication/ZG9jOjExODE5NTM5-user-access-token) of an authenticated UiTiD *and* it requires a `x-registration-token` header containing a valid registration token of the passholder.

A user access token of a client with `PASSHOLDERS_REGISTER_UITID` permission is mandatory.
 * @summary Register UiTiD for passholder
 */
export const registerUitidPassholder = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    return axios.put(
      `/passholders/me/uitid`,undefined,options
    );
  }



    export type RegisterUitidPassholderMutationResult = NonNullable<Awaited<ReturnType<typeof registerUitidPassholder>>>
    
    export type RegisterUitidPassholderMutationError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>

    export const useRegisterUitidPassholder = <TError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerUitidPassholder>>, TError,TVariables, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerUitidPassholder>>, TVariables> = () => {
          

          return  registerUitidPassholder(axiosOptions)
        }

        

      return useMutation<Awaited<ReturnType<typeof registerUitidPassholder>>, TError, TVariables, TContext>(mutationFn, mutationOptions);
    }
    /**
 * Allows users to retrieve their passholder using a user access token.

A user access token of a client with `PASSHOLDERS_SELF_READ` permission is mandatory. The passholder is retrieved by `inszNumber` if the access token contains the custom claim `https://publiq.be/rrn` (i.e. user has logged in using connection ACM), or by linked UiTiD user (`sub` or `https://publiq.be/uitidv1id` claim of the user access token).
 * @summary Retrieve passholder for the current user
 */
export const getPassholdersMe = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Passholder>> => {
    return axios.get(
      `/passholders/me`,options
    );
  }


export const getGetPassholdersMeQueryKey = () => [`/passholders/me`];

    
export type GetPassholdersMeQueryResult = NonNullable<Awaited<ReturnType<typeof getPassholdersMe>>>
export type GetPassholdersMeQueryError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>

export const useGetPassholdersMe = <TData = Awaited<ReturnType<typeof getPassholdersMe>>, TError = AxiosError<UnauthorizedResponse | ForbiddenResponse | Error>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getPassholdersMe>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPassholdersMeQueryKey();

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPassholdersMe>>> = ({ signal }) => getPassholdersMe({ signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof getPassholdersMe>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * <!-- theme: warning -->

> WARNING
>
> Experimental API. Breaking changes might be introduced in future updates.

Allows users to self-register a passholder using a user access token.

A user access token of a client with `PASSHOLDERS_SELF_REGISTRATION` permission for the `registrationOrganizer` is mandatory. Furthermore, the user access token must contain the custom claim `https://publiq.be/rrn` (i.e. user has to login using connection ACM).

Please note a user can only self-register one passholder. Use `GET /passholders/me` to check if a passholder already exists for this user.
 * @summary Register passholder for the current user
 */
export const postPassholdersMe = (
    passholderSelfRegistration: PassholderSelfRegistration, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Passholder>> => {
    return axios.post(
      `/passholders/me`,
      passholderSelfRegistration,options
    );
  }



    export type PostPassholdersMeMutationResult = NonNullable<Awaited<ReturnType<typeof postPassholdersMe>>>
    export type PostPassholdersMeMutationBody = PassholderSelfRegistration
    export type PostPassholdersMeMutationError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>

    export const usePostPassholdersMe = <TError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postPassholdersMe>>, TError,{data: PassholderSelfRegistration}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postPassholdersMe>>, {data: PassholderSelfRegistration}> = (props) => {
          const {data} = props ?? {};

          return  postPassholdersMe(data,axiosOptions)
        }

        

      return useMutation<Awaited<ReturnType<typeof postPassholdersMe>>, TError, {data: PassholderSelfRegistration}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * Allows users to self check-in at an event using a user access token and a check-in code.

A user access token of a passholder, authenticated via a client with `PASSHOLDERS_SELF_CHECKIN` permission is mandatory.
 * @summary Check in the current passholder
 */
export const postPassholdersMeCheckin = (
    postPassholdersMeCheckinBody: PostPassholdersMeCheckinBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostPassholdersMeCheckin201>> => {
    return axios.post(
      `/passholders/me/checkins`,
      postPassholdersMeCheckinBody,options
    );
  }



    export type PostPassholdersMeCheckinMutationResult = NonNullable<Awaited<ReturnType<typeof postPassholdersMeCheckin>>>
    export type PostPassholdersMeCheckinMutationBody = PostPassholdersMeCheckinBody
    export type PostPassholdersMeCheckinMutationError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>

    export const usePostPassholdersMeCheckin = <TError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postPassholdersMeCheckin>>, TError,{data: PostPassholdersMeCheckinBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postPassholdersMeCheckin>>, {data: PostPassholdersMeCheckinBody}> = (props) => {
          const {data} = props ?? {};

          return  postPassholdersMeCheckin(data,axiosOptions)
        }

        

      return useMutation<Awaited<ReturnType<typeof postPassholdersMeCheckin>>, TError, {data: PostPassholdersMeCheckinBody}, TContext>(mutationFn, mutationOptions);
    }
    /**
 * Retrieve the transaction history of the current passholder.

A user access token of a passholder, authenticated via a client with `PASSHOLDERS_TRANSACTION_HISTORY` permission is mandatory.
 * @summary Retrieve transaction history of the current passholder
 */
export const getPassholdersMeTransactions = (
    params?: GetPassholdersMeTransactionsParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<TransactionsPaginatedCollection>> => {
    return axios.get(
      `/passholders/me/transactions`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }


export const getGetPassholdersMeTransactionsQueryKey = (params?: GetPassholdersMeTransactionsParams,) => [`/passholders/me/transactions`, ...(params ? [params]: [])];

    
export type GetPassholdersMeTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getPassholdersMeTransactions>>>
export type GetPassholdersMeTransactionsQueryError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>

export const useGetPassholdersMeTransactions = <TData = Awaited<ReturnType<typeof getPassholdersMeTransactions>>, TError = AxiosError<Error | UnauthorizedResponse | ForbiddenResponse>>(
 params?: GetPassholdersMeTransactionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getPassholdersMeTransactions>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPassholdersMeTransactionsQueryKey(params);

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPassholdersMeTransactions>>> = ({ signal }) => getPassholdersMeTransactions(params, { signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof getPassholdersMeTransactions>>, TError, TData>({ queryKey, queryFn, ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

