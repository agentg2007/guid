# guid

Simple and lightweight guid utility tool.

## Install

```
npm i @nthity/guid
```

## Usage

```typescript
import guid from "@nthity/guid";

// Generates new guid.
console.log(guid.new());

// Test guid value.

// Returns false
console.log(guid.isGuid("this is not a guid"));
// Returns true
console.log(guid.isGuid("66b8546c-2dd0-4caf-883f-fc2d2a317fe2"));
```
