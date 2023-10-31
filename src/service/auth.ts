interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'sadasdasdasd5a4ds6asd4a6s5d46as5d',
                user: {
                    name: 'Diego',
                    email: 'diego@rocketset.com.br',
                }
            })
        }, 2000)
    });
}