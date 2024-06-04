import Link from 'next/link';
import { useState } from 'react';

export default function Success() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex items-center justify-center h-screen">                
            <div className="h-80">
                <div>
                    <div className="flex justify-center">
                        <button onClick={() => setShowModal(!showModal)} className="rounded-lg border border-primary bg-primary px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary hover:bg-primary focus:ring focus:ring-primary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary">Order Status</button>
                    </div>
                    {showModal && (
                        <>
                            <div className="fixed inset-0 z-10 bg-secondary-700/50"></div>
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
                                <div className="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm">
                                    <div className="relative p-5">
                                        <div className="text-center">
                                            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-secondary-900">Order Placed</h3>
                                                <div className="mt-2 text-sm text-secondary-500">Your order was placed, we will notify you about the delivery information</div>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex justify-end gap-3">
                                            <Link href="/products" type="button" onClick={() => setShowModal(false)} className="flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Continue Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
