import { QualityRule } from "@/types";

export const rules: QualityRule[] = [
  {
    id: "js-s1481",
    key: "javascript:S1481",
    name: "Unused local variables should be removed",
    severity: "minor",
    type: "code_smell",
    language: "JavaScript",
    description:
      "Unused local variables are dead code. They should be removed to improve code readability and maintainability.",
    nonCompliantExample: `function calculateTotal(price, quantity) {
  const tax = 0.08; // Unused variable
  const discount = 10; // Unused variable
  return price * quantity;
}`,
    compliantExample: `function calculateTotal(price, quantity) {
  return price * quantity;
}`,
    tags: ["unused", "dead-code", "clumsy"],
  },
  {
    id: "js-s1533",
    key: "javascript:S1533",
    name: "SQL queries should not be vulnerable to injection attacks",
    severity: "critical",
    type: "vulnerability",
    language: "JavaScript",
    description:
      "SQL injection is a code injection technique used to attack data-driven applications. User-provided data should never be directly concatenated into SQL queries.",
    nonCompliantExample: `function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}`,
    compliantExample: `function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = ?";
  return db.execute(query, [userId]);
}`,
    tags: ["sql", "injection", "owasp", "security", "cwe"],
  },
  {
    id: "js-s3776",
    key: "javascript:S3776",
    name: "Cognitive Complexity of functions should not be too high",
    severity: "major",
    type: "code_smell",
    language: "JavaScript",
    description:
      "Cognitive Complexity is a measure of how difficult a unit of code is to intuitively understand. High Cognitive Complexity is a sign that code should be refactored.",
    nonCompliantExample: `function processOrder(order) {
  if (order.items) {
    for (let item of order.items) {
      if (item.stock > 0) {
        if (item.price > 100) {
          if (order.isPremium) {
            // Apply premium discount
            item.price *= 0.9;
          } else {
            // Apply standard discount
            item.price *= 0.95;
          }
        }
      } else {
        // Handle out of stock
        if (order.allowBackorder) {
          item.backorder = true;
        }
      }
    }
  }
  return order;
}`,
    compliantExample: `function processOrder(order) {
  if (!order.items) return order;
  
  order.items = order.items.map(item => 
    processOrderItem(item, order)
  );
  
  return order;
}

function processOrderItem(item, order) {
  if (item.stock <= 0) {
    return handleOutOfStock(item, order);
  }
  
  if (item.price > 100) {
    return applyDiscount(item, order.isPremium);
  }
  
  return item;
}`,
    tags: ["brain-overload", "complexity"],
  },
  {
    id: "py-s107",
    key: "python:S107",
    name: "Functions should not have too many parameters",
    severity: "major",
    type: "code_smell",
    language: "Python",
    description:
      "Functions with too many parameters are hard to use because developers must remember the meaning and order of each parameter.",
    nonCompliantExample: `def create_user(username, email, password, first_name, 
                last_name, phone, address, city, state, 
                zip_code, country):
    # Too many parameters
    pass`,
    compliantExample: `def create_user(user_data: UserData):
    # Using a data class or dictionary
    pass`,
    tags: ["design", "api-design"],
  },
  {
    id: "java-s1068",
    key: "java:S1068",
    name: "Unused private fields should be removed",
    severity: "minor",
    type: "code_smell",
    language: "Java",
    description:
      "Private fields that are never used are dead code. They should be removed to improve code quality.",
    nonCompliantExample: `public class User {
  private String name;
  private String email;
  private String unusedField; // Never used
  
  public String getName() {
    return name;
  }
}`,
    compliantExample: `public class User {
  private String name;
  private String email;
  
  public String getName() {
    return name;
  }
}`,
    tags: ["unused", "dead-code"],
  },
  {
    id: "ts-s1854",
    key: "typescript:S1854",
    name: "Dead stores should be removed",
    severity: "major",
    type: "code_smell",
    language: "TypeScript",
    description:
      "A dead store happens when a value is assigned to a variable but never read before the variable is reassigned or goes out of scope.",
    nonCompliantExample: `function calculateDiscount(price: number): number {
  let discount = price * 0.1; // Dead store
  discount = price * 0.2; // This overwrites the previous value
  return discount;
}`,
    compliantExample: `function calculateDiscount(price: number): number {
  let discount = price * 0.2;
  return discount;
}`,
    tags: ["dead-code", "pitfall"],
  },
  {
    id: "js-s2692",
    key: "javascript:S2692",
    name: '"indexOf" checks should not be for positive numbers',
    severity: "critical",
    type: "bug",
    language: "JavaScript",
    description:
      "When checking indexOf results, comparing with positive numbers is error-prone because indexOf returns -1 when not found.",
    nonCompliantExample: `const fruits = ['apple', 'banana', 'orange'];
if (fruits.indexOf('grape') > 0) { // Wrong! Excludes index 0
  console.log('Found');
}`,
    compliantExample: `const fruits = ['apple', 'banana', 'orange'];
if (fruits.indexOf('grape') >= 0) { // Correct
  console.log('Found');
}

// Even better
if (fruits.includes('grape')) {
  console.log('Found');
}`,
    tags: ["pitfall", "bug"],
  },
  {
    id: "java-s2259",
    key: "java:S2259",
    name: "Null pointers should not be dereferenced",
    severity: "critical",
    type: "bug",
    language: "Java",
    description:
      "Dereferencing a null pointer will always result in a NullPointerException. Make sure variables are not null before using them.",
    nonCompliantExample: `public String getUserName(User user) {
  return user.getName().toUpperCase(); // user might be null
}`,
    compliantExample: `public String getUserName(User user) {
  if (user == null || user.getName() == null) {
    return "Unknown";
  }
  return user.getName().toUpperCase();
}`,
    tags: ["null", "pitfall", "cert"],
  },
  {
    id: "py-s5131",
    key: "python:S5131",
    name: "Endpoints should not be vulnerable to reflected XSS attacks",
    severity: "critical",
    type: "vulnerability",
    language: "Python",
    description:
      "Cross-site scripting (XSS) attacks inject malicious scripts into otherwise trusted websites. Always sanitize user input.",
    nonCompliantExample: `from flask import Flask, request

@app.route('/search')
def search():
    query = request.args.get('q')
    return f"<h1>Results for: {query}</h1>" # Vulnerable`,
    compliantExample: `from flask import Flask, request
from markupsafe import escape

@app.route('/search')
def search():
    query = request.args.get('q')
    return f"<h1>Results for: {escape(query)}</h1>"`,
    tags: ["xss", "owasp", "security", "cwe"],
  },
  {
    id: "ts-s1172",
    key: "typescript:S1172",
    name: "Unused function parameters should be removed",
    severity: "minor",
    type: "code_smell",
    language: "TypeScript",
    description:
      "Unused parameters should be removed to improve code clarity. If keeping them for interface compliance, prefix with underscore.",
    nonCompliantExample: `function greet(name: string, age: number) {
  return \`Hello, \${name}!\`; // age is never used
}`,
    compliantExample: `// Option 1: Remove unused parameter
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

// Option 2: Prefix with underscore if needed for interface
function greet(name: string, _age: number) {
  return \`Hello, \${name}!\`;
}`,
    tags: ["unused", "convention"],
  },
  {
    id: "java-s2095",
    key: "java:S2095",
    name: "Resources should be closed",
    severity: "critical",
    type: "bug",
    language: "Java",
    description:
      "Resources like files, streams, and connections should always be closed to prevent resource leaks.",
    nonCompliantExample: `public void readFile(String path) {
  FileInputStream fis = new FileInputStream(path);
  // File is never closed - resource leak!
  int data = fis.read();
}`,
    compliantExample: `public void readFile(String path) {
  try (FileInputStream fis = new FileInputStream(path)) {
    int data = fis.read();
  } catch (IOException e) {
    // Handle exception
  }
}`,
    tags: ["leak", "resource-leak", "pitfall"],
  },
  {
    id: "js-s2970",
    key: "javascript:S2970",
    name: "Assertions should not be given twice the same argument",
    severity: "major",
    type: "bug",
    language: "JavaScript",
    description:
      "Comparing a value to itself in an assertion is likely a mistake and always passes or fails.",
    nonCompliantExample: `it('should calculate total', () => {
  const total = calculateTotal(10, 5);
  expect(total).toBe(total); // Always passes!
});`,
    compliantExample: `it('should calculate total', () => {
  const total = calculateTotal(10, 5);
  expect(total).toBe(50);
});`,
    tags: ["tests", "pitfall"],
  },
];
