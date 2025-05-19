'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// 페이지 전환 애니메이션
export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// 페이드인 애니메이션
export const FadeIn = ({ 
  children, 
  delay = 0,
  duration = 0.5
}: { 
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// 위에서 아래로 슬라이드 애니메이션
export const SlideDown = ({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// 스태거 효과 (자식 요소들이 순차적으로 나타나는 효과)
export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1
}: { 
  children: ReactNode;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

// 스태거 효과의 자식 요소
export const StaggerItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// 로딩 스피너 애니메이션
export const LoadingSpinner = ({ size = 40, color = "#4CAF50" }: { size?: number, color?: string }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `4px solid rgba(0, 0, 0, 0.1)`,
        borderTopColor: color,
        display: 'inline-block'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
};

// 펄스 애니메이션 (주의를 끌기 위한 깜빡임 효과)
export const Pulse = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};
