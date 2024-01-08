import tw from 'tailwind-styled-components';

export const StyledInput = tw.input`
    peer block min-h-[auto]
    w-full 
    rounded 
    border-0 
    bg-transparent
    px-3 
    py-[0.32rem]
    leading-[2.15] 
    outline-none 
    transition-all 
    duration-200 ease-linear
    focus:placeholder:opacity-100 
    data-[te-input-state-active]:placeholder:opacity-100 
    motion-reduce:transition-none 
    dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0
`;
export const StyledInputWrapper = tw.div`
    relative mb-6
`;

export const Button = tw.button`
    mb-3 
    inline-block 
    w-full 
    rounded 
    px-6 
    pb-2 
    pt-2.5 
    text-xs 
    uppercase 
    leading-normal 
    shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] 
    transition duration-150 
    ease-in-out 
    hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] 
    focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] 
    focus:outline-none focus:ring-0 
    active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]
`;
export const StyledLabel = tw.label`
    pointer-events-none 
    absolute 
    left-3 
    top-0 
    mb-0
    max-w-[90%] 
    origin-[0_0] 
    truncate pt-[0.37rem] 
    leading-[2.15] 
    text-neutral-500 
    transition-all 
    duration-200 ease-out 
    peer-focus:-translate-y-[1.15rem] 
    peer-focus:scale-[0.8] 
    peer-focus:text-primary 
    peer-data-[te-input-state-active]:-translate-y-[1.15rem] 
    peer-data-[te-input-state-active]:scale-[0.8] 
    motion-reduce:transition-none 
    dark:text-neutral-200 
    dark:peer-focus:text-primary
`;
