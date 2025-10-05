import { useState, type FC, type ReactNode } from 'react';
import styles from './Select.module.css';
import Arrow from '../../icons/arrow.svg?react';
import Checkmark from '../../icons/checkmark.svg?react';

export interface SelectProps {
    value?: string;
    placeholder: string;
    onChange?: (value?: string) => void;
    options: { title: string, value: string }[],
    icon?: ReactNode;
    reversContent?: boolean;
}

export const Select: FC<SelectProps> = props => {
    const [isOpened, setIsOpened] = useState(false);

    const text = props.value ? props.options.find(el => el.value === props.value)?.title : props.placeholder;

    const onSelect = (value?: string) => {
        if (value === props.value) {
            props.onChange?.(undefined);
        } else {
            props.onChange?.(value);
        }
    }


    const getIcon = () => {
        const icon = props.icon ? props.icon : <Arrow />;
        return (
            <div data-selected={props.value ? "true" : "false"} data-open={isOpened ? "true" : "false"} className={styles.arrow}>
                {icon}
            </div>
        )
    }

    return (
        <div onClick={() => {
            setIsOpened(!isOpened);
        }} className='relative cursor-pointer'>
            <div data-reversed={props.reversContent ? "true" : "false"} data-selected={props.value ? "true" : "false"} className="px-[14px] py-[9px] h-9 rounded-[18px] text-[var(--text-inverted)] bg-[var(--state-control)] flex items-center gap-[6px]
         data-[reversed=true]:flex-row-reverse
         data-[selected=true]:text-[var(--bg-base)]
         data-[selected=true]:bg-[var(--state-accent)]">
                <div>
                    {text}
                </div>
                {getIcon()}
            </div>
            {isOpened && <div className="absolute top-[38px] p-1 border border-[var(--popover-border)] bg-[var(--card-body)] rounded-[11px] z-[10000]">
                {props.options.map(el => {
                    return <div className="pl-2 flex items-center text-left gap-2 justify-start w-[164px] h-9 text-sm text-[var(--text-inverted)] leading-[18px]" onClick={() => {
                        onSelect(el.value)
                    }}>
                        {props.value === el.value ? <Checkmark /> : <div className={styles.emptyCheckmark} />}
                        <div>
                            {el.title}
                        </div>
                    </div>
                })}
            </div>}
        </div>
    )
}