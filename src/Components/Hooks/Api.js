export const API_URL = "https://dogsapi.origamid.dev/json";

//Funcao para fazer Post e Recuperar Token do usuario.
export function TOKEN_POST(body) {
    return {
        url: API_URL + "/jwt-auth/v1/token",
        options: {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }

    }
}

//funcao get para puchar dados do usuario logado
export function USER_GET(token) {
    return {
        url: API_URL + "/api/user",
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },

        }

    }
}

export function TOKEN_VALIDATE_POST(token) {
    return {
        url: API_URL + "/jwt-auth/v1/token/validate",
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }

    }
}


//Funcao para criar novo usuario

export function USER_POST(body) {
    return {
        url: API_URL + "/api/user",
        options: {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }

    }
}
//funcao para postar fotos

export function PHOTO_POST(formData, token) {
    return {
        url: API_URL + "/api/photo",
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
        }

    }
}

//funcao para puxar as fotos 

export function PHOTOS_GET({ page, total, user }) {
    return {
        url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        }

    }
}

//funcao para puxar uma foto unica

export function PHOTO_GET(id) {
    return {
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        },
    };
}

//funcao para comentar

export function COMMENT_POST(id, body) {
    return {
        url: `${API_URL}/api/comment/${id}`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
            body: JSON.stringify(body),
        },
    };
}

//funcao para deletar foto

export function PHOTO_DELETE(id) {
    return {
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
        },
    };
}

//funcoes para recuperacao de password

export function PASSWORD_LOST(body) {
    return {
        url: API_URL + '/api/password/lost',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function PASSWORD_RESET(body) {
    return {
        url: API_URL + '/api/password/reset',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}


//Funcao get de estatisticas

export function STATS_GET() {
    return {
        url: API_URL + '/api/stats',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
        },
    };
}
