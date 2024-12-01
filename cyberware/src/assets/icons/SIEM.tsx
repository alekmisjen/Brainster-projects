import React from "react";

interface SIEMIconProps {
  size?: number;
  color?: string;
}

export const SIEM: React.FC<SIEMIconProps> = ({
  size = 70,
  //color = "black",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 117 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.828 61.1615L61.1249 54.6769L62.4218 61.1615C64.8172 73.1385 74.1788 82.5001 86.1571 84.8955L92.6417 86.1924L86.1571 87.4894C74.1801 89.8848 64.8172 99.2464 62.4218 111.225L61.1249 117.709L59.828 111.225C57.4326 99.2477 48.071 89.8848 36.094 87.4894L29.6094 86.1924L36.094 84.8955C48.071 82.5001 57.4326 73.1385 59.828 61.1615ZM111.288 18.9419L58.4982 4.79711L5.70853 18.9419V80.9226C5.70853 90.3651 8.03945 99.1238 12.4055 106.687C16.7804 114.265 23.1993 120.667 31.3639 125.381H31.3727L58.4982 141.041L85.6236 125.381H85.6325C93.7971 120.667 100.215 114.265 104.591 106.687L104.595 106.689C108.958 99.1276 111.288 90.3689 111.288 80.9226V18.9419ZM59.1176 0L116.089 15.2648V80.9226C116.089 91.2006 113.529 100.773 108.736 109.078V109.087C103.951 117.373 96.9395 124.372 88.0216 129.521L88.0241 129.524L58.4982 146.57L28.9735 129.524L28.9761 129.521C20.0594 124.371 13.0477 117.373 8.26319 109.087C3.46861 100.783 0.910156 91.207 0.910156 80.9226V15.2648L57.8813 0H59.1188H59.1176ZM86.956 35.8272L87.3883 33.6657L87.8206 35.8272C88.6195 39.8204 91.7392 42.9401 95.7323 43.739L97.8939 44.1713L95.7323 44.6036C91.7404 45.4012 88.6195 48.5222 87.8206 52.5154L87.3883 54.6769L86.956 52.5154C86.1571 48.5222 83.0374 45.4025 79.0442 44.6036L76.8827 44.1713L79.0442 43.739C83.0361 42.9401 86.1571 39.8204 86.956 35.8272ZM34.2131 31.6558L34.8615 28.4135L35.51 31.6558C36.7083 37.6437 41.3891 42.3258 47.377 43.5228L50.6193 44.1713L47.377 44.8198C41.3879 46.0168 36.7071 50.6989 35.51 56.6868L34.8615 59.9291L34.2131 56.6868C33.016 50.6976 28.3339 46.0168 22.3461 44.8198L19.1038 44.1713L22.3461 43.5228C28.3339 42.3245 33.016 37.6437 34.2131 31.6558Z"
        fill="black"
      />
    </svg>
  );
};
