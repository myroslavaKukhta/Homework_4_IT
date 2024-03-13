import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (val: string) => void, setName: (val: string) => void, addUserCallback: (name: string) => void) => {
    if (name.trim() !== '') {
        addUserCallback(name.trim());
        setName('')
    } else {
        setError('Title is required')
    }
}

export const pureOnBlur = (name: string, setError: (val: string) => void) => {
    if (name.trim() === '') {
        setError('Name is required')
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
    if (e.key === 'Enter') {
        addUser()
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    // const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     const trimmedName = e.currentTarget.value)
    //     if (trimmedName) {
    //         setName(trimmedName)
    //         setError('')
    //     } else {
    //         setName('')
    //         setError('name is required')
    //     }
    // }

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        if (!e.currentTarget.value.trim()) {
            setError('name is required')
        } else {
            setError('')
        }
    }



    // const addUser = () => {
    //     addUserCallback(name)
    //     alert(`Hello ${name} !`)
    // }


    const addUser = () => {
        const trimmedName = name.trim();
        if (trimmedName) {
            addUserCallback(trimmedName)
            alert(`Hello ${trimmedName} !`)
            setName('')
        }
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    // const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter' && name) {
    //         addUser()
    //         setName('')
    //     }
    // }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (!name.trim()) {
                setError('error message'); // Установите сообщение об ошибке
            } else {
                addUser();
                setName('');
            }
        }
    }

    const totalUsers = users.length;
    const lastUserName = users[users.length - 1]?.name;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
