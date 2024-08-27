import { useState, useEffect } from 'react';

const useEmailValidation = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Valid Email Required');
            setSubmit(false);
        } else {
            setError('');
            setSubmit(true);
            console.log('value '+submit);
            if (callback) {
                callback(); // Optional callback function after successful validation
            }
        }
    };

    useEffect(() => {
        if (submit) {
            console.log('Submit status is now true');
        }
    }, [submit]);

    return { email, setEmail, error, handleSubmit, submit, setSubmit };

};

export default useEmailValidation;
