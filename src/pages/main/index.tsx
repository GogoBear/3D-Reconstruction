import React, { useMemo } from 'react';
import { useCounter } from '@/hooks/useCounter';

const Main = () => {
  const { count, increment } = useCounter();

  const env: 'development' | 'production' 