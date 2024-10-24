
const checkSession = () => {
    const session = localStorage.getItem('session');

    if (!session || session !== 'valid') {
        window.location.href = '/';
    }
};

export default checkSession;