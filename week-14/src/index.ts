interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UpdateProps = Pick<User, "name" | "age" | "password">
type UpdateOptionalUser = Partial <UpdateProps>

const UpdateUser = (updated: UpdateOptionalUser) => {
        // we hit the database to update the users
}
UpdateUser({})
