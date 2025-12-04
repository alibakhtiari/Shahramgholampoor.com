const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../assets/vid');
const ROOT_DIR = path.join(__dirname, '../');
const MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20MB
const REPO_BASE_URL = 'https://raw.githubusercontent.com/alibakhtiari/Shahramgholampoor.com/main/assets/vid/';

// Helper to get all HTML files in root
function getHtmlFiles(dir) {
    return fs.readdirSync(dir).filter(file => file.endsWith('.html'));
}

// Helper to replace links in content
function replaceLinks(content, filename) {
    const localLink = new RegExp(`(src|href)=["']/?assets/vid/${filename}["']`, 'g');
    const remoteLink = `$1="${REPO_BASE_URL}${filename}"`;
    return content.replace(localLink, remoteLink);
}

async function main() {
    if (!fs.existsSync(ASSETS_DIR)) {
        console.error(`Directory not found: ${ASSETS_DIR}`);
        return;
    }

    const files = fs.readdirSync(ASSETS_DIR);
    const largeFiles = [];

    // Identify large files
    for (const file of files) {
        const filePath = path.join(ASSETS_DIR, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && stats.size > MAX_SIZE_BYTES) {
            largeFiles.push(file);
            console.log(`Found large file: ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
        }
    }

    if (largeFiles.length === 0) {
        console.log('No files larger than 20MB found.');
        return;
    }

    // Update HTML files
    const htmlFiles = getHtmlFiles(ROOT_DIR);
    for (const htmlFile of htmlFiles) {
        const htmlPath = path.join(ROOT_DIR, htmlFile);
        let content = fs.readFileSync(htmlPath, 'utf8');
        let modified = false;

        for (const largeFile of largeFiles) {
            const newContent = replaceLinks(content, largeFile);
            if (newContent !== content) {
                content = newContent;
                modified = true;
                console.log(`Updated links for ${largeFile} in ${htmlFile}`);
            }
        }

        if (modified) {
            fs.writeFileSync(htmlPath, content, 'utf8');
        }
    }

    // Delete large files
    for (const file of largeFiles) {
        const filePath = path.join(ASSETS_DIR, file);
        try {
            fs.unlinkSync(filePath);
            console.log(`Deleted local file: ${file}`);
        } catch (err) {
            console.error(`Failed to delete ${file}:`, err);
        }
    }

    console.log('Processing complete.');
}

main();
