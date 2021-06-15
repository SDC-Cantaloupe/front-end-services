import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../client/src/app.jsx';
import React from 'react';
import RelatedProducts from '../client/src/related/relatedProducts.jsx';
import RelatedList from '../client/src/related/relatedList.jsx';
import ProductCard from '../client/src/related/productCard.jsx';

var products = [
  {
    'id': 11,
    'name': 'Air Minis 250',
    'category': 'Basketball Shoes',
    'original_price': '0',
    'image': 'urlplaceholder/style_1_photo_number.jpg',
    'avgReview': 4.3,
    'features': [
      {
        'feature': 'Sole',
        'value': 'Rubber'
      },
      {
        'feature': 'Material',
        'value': 'FullControlSkin'
      }
    ]
  },
  {
    'id': 14,
    'name': 'Air Moonis 250',
    'category': 'Soccer Shoes',
    'original_price': '350',
    'sale_price': '300',
    'image': 'urlplaceholder/style_1_photo_number.jpg',
    'avgReview': 4.3,
    'features': [
      {
        'feature': 'Sole',
        'value': 'Wood'
      },
      {
        'feature': 'Color',
        'value': 'White'
      }
    ]
  }
];

afterEach(cleanup);

describe('Related Products List', () => {
  test('it renders', () => {
    render(<RelatedList />);
    expect(screen.getByText('RELATED PRODUCTS')).toBeInTheDocument();
  });

  test('Each card will show information for single product', () => {
    render(<RelatedList />);
    var cards = document.getElementsByClassName('related_productCard');
    expect(cards.length).toEqual(1);
  });
});


describe('Product card', () => {
  test('It will render info for a single product', () => {
    render(<ProductCard productInfo={products[0]}/>);
    expect(screen.queryByText('Air Moonis 250')).not.toBeInTheDocument();
  });

  test('It will show the product name', () => {
    render(<ProductCard productInfo={products[0]}/>);
    expect(screen.getByText('Air Minis 250')).toBeInTheDocument();
  });

  test('It will show the price/sale price', () => {
    render(<ProductCard productInfo={products[1]}/>);
    expect(screen.getByText('$300')).toBeInTheDocument();
    const salePrice = document.getElementsByClassName('related_sale');
    expect(salePrice[0].innerHTML).toBe('$350');
  });

  test('It will show the category', () => {
    render(<ProductCard productInfo={products[1]}/>);
    expect(screen.getByText('Soccer Shoes')).toBeInTheDocument();
  });

  test('It will show display a preview image', () => {
    render(<ProductCard productInfo={products[1]}/>);
    const productImage = document.getElementsByClassName('related_productCardImage');
    expect(productImage[0].src).toBe('http://localhost/urlplaceholder/style_1_photo_number.jpg');
  });


});

// 1.4.1.1.  Product Information
// The following information will appear on the card.  This information will all be read-only and will not have any interactivity associated.
// Product Category

// Product Name

// Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected.  If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.


// Star Rating (# of Reviews) - Each product has an average rating based on its reviews.  The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.


// The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.  If there are no reviews, this entire section should be hidden.

// 1.4.1.2.  Product Preview Images
// The product card should display preview images of the related products.  The images which appear on the product card should be the same that appear in the Overview module on the item detail page for that product.
// By default, the preview image displayed on each card will be the primary image for that product.  This should be the same which first appears on the image detail page’s image gallery.