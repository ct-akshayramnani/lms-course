import React, { useState } from 'react';

const AccordionItem = ({ title='default', content='default' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex py-6 justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <h5 className="text-gray-900 font-medium">{title}</h5>
        </div>
        <div data-menu className="cursor-pointer">
          <div className="flex items-center">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Hide"
                className="icon icon-tabler icon-tabler-chevron-up"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#718096"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 15 12 9 18 15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Show"
                className="icon icon-tabler icon-tabler-chevron-down"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#718096"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}
            <span className="ml-6 text-gray-600 text-sm">12:29</span>
          </div>
        </div>
      </div>
      {isExpanded && (
        <p className="text-gray-600 text-sm mt-4">
          {content}
        </p>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: '1.0 What is Design ?',
      content: 'Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit aut rerum. Et quidem rerum facilis est cur verear, ne ferae quidem se texit, ne. Ut placet, inquam tum dicere',
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
