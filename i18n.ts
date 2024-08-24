import { notFound } from 'next/navigation';
const { getRequestConfig } = require('next-intl/server');

// Can be imported from a shared config
const locales = ['en', 'vi'];

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`./public/translates/${locale}.json`)).default
    };
});
