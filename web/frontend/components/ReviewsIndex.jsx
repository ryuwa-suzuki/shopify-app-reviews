import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  Badge,
} from '@shopify/polaris';
import React from 'react';

export function ReviewsIndex () {
  const reviews = [
    {
      id: 1,
      raiting: '☆☆☆☆☆',
      date: 'Jul 20 at 4:34pm',
      review: 'テストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキスト',
      product: '半袖シャツ',
      product_id: 1
    },
    {
      id: 2,
      raiting: '☆☆☆☆☆',
      date: 'Jul 20 at 4:34pm',
      review: 'テスト',
      product: '半袖シャツ',
      product_id: 1
    }
  ];
  const resourceName = {
    singular: 'reviews',
    plural: 'reviews',
  };

  const style = {
    whiteSpace: 'wrap'
  }

  const rowMarkup = reviews.map(
    (
      {id, raiting, review, date, product},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        // selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>{raiting}</IndexTable.Cell>
        <IndexTable.Cell>{product}</IndexTable.Cell>
        <IndexTable.Cell>
          <div
          style={style}>
            {review}
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>{date}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <LegacyCard>
      <IndexTable
        resourceName={resourceName}
        itemCount={reviews.length}
        selectable={false}
        headings={[
          {title: 'Raiting'},
          {title: 'Product'},
          {title: 'Review'},
          {title: 'Date'},
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}
