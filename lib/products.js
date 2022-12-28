import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const productsDirectory = path.join(process.cwd(), "products");

export function getAllProductIds() {
	const fileNames = fs.readdirSync(productsDirectory);

	// Returns an array that looks like this:  -- list of all the filenames in the products directory on the root folder
	// [
	//   {
	//     params: {
	//       id: '1'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'douchebankje'
	//     }
	//   }
	// ]
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export async function getProductData(id) {
	const fullPath = path.join(productsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
