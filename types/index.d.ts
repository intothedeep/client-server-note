declare module '*.svg' {
    const content: any;
    export default content;
}

interface Props {
    getPing: function;
}

type HomeProps = Props;
type AuthProps = Prop;

declare module '@/src/services' {
    export const homeService: HomeProps;
    export const authService: AuthProps;
}
declare global {
    let __PROD__: boolean;
}

declare global {
    namespace globalThis {
        let __PROD__: boolean;
    }
}

export {};
