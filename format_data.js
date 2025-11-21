import fs from 'fs';
import path from 'path';

// Read the Data.ts file
const dataFile = fs.readFileSync('/workspace/src/Data.ts', 'utf8');

// Function to format entries consistently
function formatDataFile(content) {
  // Split the file into parts: import statement, array declaration, and the actual array content
  const importMatch = content.match(/(import.*?;)/s);
  const arrayStart = content.indexOf('const Data:');
  const arrayEnd = content.lastIndexOf('];');
  
  const importStatement = importMatch ? importMatch[1] : '';
  const arrayDeclaration = content.substring(arrayStart, arrayEnd + 2);
  
  // Extract the array content between [ and ]
  const arrayContent = arrayDeclaration.substring(arrayDeclaration.indexOf('[') + 1, arrayDeclaration.lastIndexOf(']'));
  
  // Split by }, to get individual entries
  const entries = arrayContent.split(/},\s*\n*\r*\s*{/);
  
  // Process each entry to normalize it
  const normalizedEntries = entries.map(entry => {
    // Clean up the entry
    let cleanEntry = entry.trim();
    
    // Handle the first and last entries which may have different formatting
    if (cleanEntry.startsWith('{')) {
      cleanEntry = cleanEntry.substring(1).trim();
    }
    if (cleanEntry.endsWith('}')) {
      cleanEntry = cleanEntry.substring(0, cleanEntry.length - 1).trim();
    }
    
    // Parse the entry to normalize it
    try {
      // Convert the entry to valid JSON format temporarily
      let jsonEntry = cleanEntry
        .replace(/([^,]|^)\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '$1"$2":') // Add quotes to keys
        .replace(/'/g, '"') // Convert single quotes to double quotes
        .replace(/,\s*([}\]])/g, '$1') // Remove trailing commas
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      
      // Add back missing commas and braces
      jsonEntry = '{' + jsonEntry + '}';
      
      // Replace back single quotes for string values to maintain original format
      const obj = JSON.parse(jsonEntry);
      
      // Format the object with proper indentation
      return `  {\n    id: ${obj.id},\n    nombre: "${obj.nombre}",\n    descrip: "${obj.descrip}",\n    categoria: "${obj.categoria}",\n    pago: "${obj.pago}",\n    img: "${obj.img}",\n    url: "${obj.url}",\n    bgdestacado: "${obj.bgdestacado}"\n  }`;
    } catch (e) {
      // If parsing fails, return the original entry but with consistent formatting
      return `  {\n    ${cleanEntry}\n  }`;
    }
  });
  
  // Join the entries with proper formatting
  const formattedArray = `const Data: AppsItem[] = [\n${normalizedEntries.join(',\n')}\n];`;
  
  // Combine everything
  return `${importStatement}\n\n${formattedArray}`;
}

// Format the content
const formattedContent = formatDataFile(dataFile);

// Write the formatted content back to the file
fs.writeFileSync('/workspace/src/Data.ts', formattedContent);
console.log('Data.ts has been formatted successfully!');