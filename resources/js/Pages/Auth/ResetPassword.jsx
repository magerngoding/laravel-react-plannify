import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <GuestLayout title="Reset Password">
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Plannify<span className="text-red-500">.</span>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <div>
                                        <InputLabel htmlFor='email' value='Email' />
                                        <TextInput
                                            id='email'
                                            name='email'
                                            type='email'
                                            value={data.email}
                                            className='block w-full mt-1'
                                            onChange={(e) => setData('email', e.target.email)}
                                            onErrors={errors.email && <InputError message={errors.email} className='mt-2' />}
                                        />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor='password' value='Password' />
                                        <TextInput
                                            id='password'
                                            name='password'
                                            type='password'
                                            value={data.password}
                                            className='block w-full mt-1'
                                            onChange={(e) => setData('password', e.target.password)}
                                            onErrors={errors.password && <InputError message={errors.password} className='mt-2' />}
                                        />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor='password_confirmation' value='Password Confirmation' />
                                        <TextInput
                                            id='password_confirmation'
                                            name='password_confirmation'
                                            type='password'
                                            value={data.
                                                password_confirmation}
                                            className='block w-full mt-1'
                                            onChange={(e) => setData
                                                ('password_confirmation', e.target.password_confirmation)}
                                            onErrors={errors.
                                                password_confirmation && <InputError message={errors.password_confirmation} className='mt-2' />}
                                        />
                                    </div>
                                    <div>
                                        <Button type='submit' variant='red' className='w-full' disabled={processing}>
                                            Reset Password
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
