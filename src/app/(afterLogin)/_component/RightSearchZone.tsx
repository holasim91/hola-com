'use client'
import style from "@/app/(afterLogin)/_component/rightSearchZone.module.css";
import {usePathname} from "next/navigation";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

export default function RightSearchZone(){
    const pathName = usePathname()
    const onChangeAll = () =>{}
    const onChangeFollow = () => {}
    const onChangeEveryWhere = () => {}
    const onChangeCurrentLocation = () => {}
    if(pathName === 'explore'){
        return null
    }
    if (pathName === '/search') {
        return (
            <div>
                <h5 className={style.filterTitle}>검색 필터</h5>
                <div className={style.filterSection}>
                    <div>
                        <label>사용자</label>
                        <div className={style.radio}>
                            <div>모든 사용자</div>
                            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                        </div>
                        <div className={style.radio}>
                            <div>내가 팔로우하는 사람들</div>
                            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                        </div>
                    </div>
                    <div>
                        <label>위치</label>
                        <div className={style.radio}>
                            <div>어디에서나</div>
                            <input type="radio" name="pf2" defaultChecked onChange={onChangeEveryWhere} />
                        </div>
                        <div className={style.radio}>
                            <div>현위치 주변</div>
                            <input type="radio" name="pf2" value="on" onChange={onChangeCurrentLocation} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div style={{marginBottom:60, width:'inherit'}}>
            <SearchForm />
        </div>
    )
}