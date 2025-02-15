import React from 'react';

interface ListProps {
  id: number;
  title: string;
  year: number;
}

const List: React.FC<ListProps> = ({ id, title, year }) => {
  return (
    <tr key={id}>
      <td className="px-4 sm:px-6 py-3 sm:py-4 font-normal font-sans text-sm sm:text-base text-gray-800">
        {id}
      </td>
      <td className="px-4 sm:px-6 py-3 sm:py-4 font-normal font-sans text-sm sm:text-base text-gray-800">
        {title}
      </td>
      <td className="px-4 sm:px-6 py-3 sm:py-4 font-normal font-sans text-sm sm:text-base text-gray-800">
        {year}
      </td>
      <td className="px-4 sm:px-6 py-3 sm:py-4 font-normal font-sans text-sm sm:text-base text-gray-800">
        <a href={`/edit/${id}`} className="mx-1 text-sm sm:text-base text-green-600 hover:text-green-800">
          Edit
        </a>
        <a href={`/delete/${id}`} className="mx-1 text-sm sm:text-base text-red-600 hover:text-red-800">
          Delete
        </a>
      </td>
    </tr>
  );
}

export default List;