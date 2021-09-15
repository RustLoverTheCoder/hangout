import * as React from "react";
import { ModalWrapper } from 'reoverlay';
import { Calendar } from 'react-date-range';
import 'reoverlay/lib/ModalWrapper.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const DatePickerModal = () => {
    return (
        <ModalWrapper animation='zoom' contentContainerClassName='rounded py-4 flex flex-col items-center' onClose={() => { }}>
            <div className='text-header-primary-light font-semibold text-base'>开始之前先输入你的生日</div>
            <Calendar />
        </ModalWrapper>
    )
}

export default DatePickerModal

