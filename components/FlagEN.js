import	React				from	'react';

function	Flag({width = 32, height = 24}) {
	return (
		<svg width={width} height={height} viewBox={'0 0 32 24'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<mask id={'a'} maskUnits={'userSpaceOnUse'} x={'0'} y={'0'} width={'32'} height={'24'}>
				<path fill={'#fff'} d={'M0 0h32v24H0z'}/>
			</mask>
			<g mask={'url(#a)'}>
				<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M0 0v24h32V0H0z'} fill={'#2E42A5'}/>
				<mask id={'b'} maskUnits={'userSpaceOnUse'} x={'0'} y={'0'} width={'32'} height={'24'}>
					<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M0 0v24h32V0H0z'} fill={'#fff'}/>
				</mask>
				<g mask={'url(#b)'}>
					<mask id={'c'} maskUnits={'userSpaceOnUse'} x={'0'} y={'0'} width={'32'} height={'24'}>
						<path fill={'#fff'} d={'M0 0h32v24H0z'}/>
					</mask>
					<g mask={'url(#c)'}>
						<path d={'M-3.563 22.285l7.042 2.979 28.68-22.026 3.715-4.426-7.53-.995-11.698 9.491-9.416 6.396-10.793 8.581z'} fill={'#fff'}/>
						<path d={'M-2.6 24.372L.989 26.1 34.54-1.599h-5.037l-32.102 25.97z'} fill={'#F50100'}/>
						<path d={'M35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426 7.53-.995 11.698 9.491 9.416 6.396 10.793 8.581z'} fill={'#fff'}/>
						<path d={'M35.323 23.783l-3.588 1.728-14.286-11.86-4.236-1.324-17.445-13.5H.806l17.434 13.18 4.631 1.588 12.452 10.188z'} fill={'#F50100'}/>
						<mask id={'d'} fill={'#fff'}>
							<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2z'}/>
						</mask>
						<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2z'} fill={'#F50100'}/>
						<path d={'M12.222-2v-2h-2v2h2zm7.556 0h2v-2h-2v2zM12.222 8v2h2V8h-2zM-1.972 8V6h-2v2h2zm0 8h-2v2h2v-2zm14.194 0h2v-2h-2v2zm0 10h-2v2h2v-2zm7.556 0v2h2v-2h-2zm0-10v-2h-2v2h2zm14.25 0v2h2v-2h-2zm0-8h2V6h-2v2zm-14.25 0h-2v2h2V8zm-7.556-8h7.556v-4h-7.556v4zm2 8V-2h-4V8h4zm-16.194 2h14.194V6H-1.972v4zm2 6V8h-4v8h4zm12.194-2H-1.972v4h14.194v-4zm2 12V16h-4v10h4zm5.556-2h-7.556v4h7.556v-4zm-2-8v10h4V16h-4zm16.25-2h-14.25v4h14.25v-4zm-2-6v8h4V8h-4zm-12.25 2h14.25V6h-14.25v4zm-2-12V8h4V-2h-4z'} fill={'#fff'} mask={'url(#d)'}/>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default Flag;