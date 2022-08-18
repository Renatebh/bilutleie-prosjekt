import React from 'react';
import Select from '../../../ui/select/Select';
import Option from '../../../ui/select/Option';
import useFetch from '../../../../hooks/useFetch';
import API_CONSTANT_MAP from '../../../../api/endpoints';

const TypeOption = () => {
  const { loading, err, data } = useFetch(`${API_CONSTANT_MAP.types}`);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <Select name='' id='' defaultValue='type'>
      <Option value={'type'} disabled>
        type
      </Option>
      {data &&
        data.data.map((type) => {
          return (
            <Option value={type.attributes.type} key={type.id}>
              {type.attributes.type}
            </Option>
          );
        })}
      ;
    </Select>
  );
};

export default TypeOption;
