# Food Store Calculator

A web-based food store calculator built with **Next.js** and **TypeScript**.  

---

## Live Demo

The application is deployed on Vercel

https://food-store-calculator.vercel.app/

## 1. Installation

### Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd food-store-calculator

# Install dependencies
npm install

```
## 2. Features

### Menu & Ordering
The food store provides **7 menu items**:
- Red set – 50 THB  
- Green set – 40 THB  
- Blue set – 30 THB  
- Yellow set – 50 THB  
- Pink set – 80 THB  
- Purple set – 90 THB  
- Orange set – 120 THB  

Customers can order multiple items per bill.  
Menu items are displayed as clickable boxes.

### Discount Rules
- **Member Discount (10%)**  
  Customers with a member card receive a 10% discount.

- **Item-based Discount (5%)**  
  If a customer orders **two or more** sets of **Orange, Pink, or Green** in a single bill, a 5% discount is automatically applied.

## 3. Running Tests

Unit tests are implemented using **Jest** to ensure the correctness of pricing and discount logic.

### Run Tests

```bash
npm test