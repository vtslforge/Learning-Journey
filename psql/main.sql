CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- Drop an existing table 'IF EXISTS products'
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    is_active BOOLEAN NOT NULL DEFAULT true,
    sku TEXT UNIQUE,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products
    (name, category, price, stock, is_active, sku, description)
VALUES
    ('Wireless Mechanical Keyboard', 'Electronics', 2499.00, 25, true, 'KB-WMK-001',
     'A compact wireless mechanical keyboard with RGB backlighting.'),

    ('Gaming Mouse', 'Electronics', 1499.00, 40, true, 'MS-GAM-002',
     'Ergonomic gaming mouse with adjustable DPI and programmable buttons.'),

    ('Cotton T-Shirt', 'Clothing', 799.00, 60, true, 'TS-COT-003',
     'Comfortable 100% cotton regular-fit t-shirt.'),

    ('Running Shoes', 'Footwear', 3299.00, 18, true, 'SH-RUN-004',
     'Lightweight running shoes designed for everyday workouts.'),

    ('Water Bottle', 'Accessories', 599.00, 75, true, 'WB-STE-005',
     'Stainless steel insulated water bottle with a 750ml capacity.'),

    ('Backpack', 'Accessories', 1899.00, 30, true, 'BP-TRV-006',
     'Water-resistant backpack suitable for college, work, and travel.'),

    ('USB-C Hub', 'Electronics', 1299.00, 35, true, 'HB-USC-007',
     'Multi-port USB-C hub with HDMI, USB 3.0, and SD card support.'),

    ('Notebook', 'Stationery', 249.00, 100, true, 'NB-A5-008',
     'A5 hardcover notebook with 200 ruled pages.'),

    ('Desk Lamp', 'Home', 999.00, 22, true, 'LM-DSK-009',
     'LED desk lamp with adjustable brightness and flexible neck.'),

    ('Bluetooth Speaker', 'Electronics', 2199.00, 12, false, 'SP-BLU-010',
     'Portable Bluetooth speaker with stereo sound and long battery life.');

     SELECT * FROM products;