import gql from 'graphql-tag'

export const REGISTER_USER = gql`
mutation createUser2($user2: User2Input!){
    createUser2(user2: $user2) {
        id
        username
        role
    }
}
`