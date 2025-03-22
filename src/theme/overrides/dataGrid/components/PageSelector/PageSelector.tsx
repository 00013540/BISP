import { ChangeEvent, KeyboardEvent } from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import { ChevronLeftSVG, ChevronRightSVG } from '@/components/icons';

import {
    WrapperStyled,
    InputStyled,
    IconButtonStyled,
    InnerWrapperStyled,
} from './PageSelector.styled';
import { PageSelectorProps } from './PageSelector.types';

const PageSelector = ({ page, pageCount, onChange }: PageSelectorProps) => {
    const [inputValue, setInputValue] = useState<string | number>(page);

    useEffect(() => {
        setInputValue(page);
    }, [page]);

    const onClickPrev = () => {
        onChange(page - 1);
        setInputValue(page - 1);
    };

    const onClickNext = () => {
        onChange(page + 1);
        setInputValue(page + 1);
    };

    const validatePageNumber = (value: string | number) => {
        return !isNaN(Number(value)) && +value > 0 && +value <= pageCount;
    };

    const submitNewValue = () => {
        if (validatePageNumber(inputValue)) {
            onChange(+inputValue);
        } else {
            setInputValue(page);
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;

        submitNewValue();
    };

    const handleInputChage = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (value.trim() === '') {
            setInputValue(value);
            return;
        }

        if (validatePageNumber(value)) {
            setInputValue(value);
        }
    };

    const hasPrevPage = page > 1;
    const hasNextPage = page < pageCount;

    return (
        <WrapperStyled>
            <IconButtonStyled
                onClick={onClickPrev}
                aria-disabled={!hasPrevPage}
                disabled={!hasPrevPage}
            >
                <ChevronLeftSVG />
            </IconButtonStyled>

            <InnerWrapperStyled>
                <Typography color="text.secondary" variant="body1">
                    Page
                </Typography>

                <InputStyled
                    value={inputValue}
                    onChange={handleInputChage}
                    onKeyDown={handleKeyDown}
                    onBlur={submitNewValue}
                />

                <Typography color="text.secondary" variant="body1">
                    of {pageCount}
                </Typography>
            </InnerWrapperStyled>

            <IconButtonStyled
                onClick={onClickNext}
                aria-disabled={!hasNextPage}
                disabled={!hasNextPage}
            >
                <ChevronRightSVG />
            </IconButtonStyled>
        </WrapperStyled>
    );
};

export default PageSelector;
