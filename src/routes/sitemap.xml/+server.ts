import type { RequestHandler } from '@sveltejs/kit';
import { getAllRoutes, renderSitemap } from './sitemap';

export const GET: RequestHandler = async () => {
	const allRoutes = await getAllRoutes();
	const headers = {
		'Cache-Control': `public, max-age=${3600}, s-max-age=${3600}`,
		'Content-Type': 'text/xml'
	};
	const body = renderSitemap(allRoutes);
	return new Response(body, { headers });
};
