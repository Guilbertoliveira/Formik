

export function Select({ formik, tipo, valorSelect, title, isDisabled, handle }: any) {
    return (
        <>
            <label htmlFor={valorSelect} style={{ display: 'flex', justifyContent: 'center' }}>{title}</label>

            <select
                id={valorSelect}
                name={valorSelect}
                onChange={handle}
                onBlur={formik.handleBlur}
                value={formik.values.valorSelect}
                disabled={isDisabled}
            >
                <option value="">Selecione uma opção</option>
                {
                    tipo.map((obj: any) => <option value={obj.value}>{obj.label}</option>)
                }
            </select>
        </>
    )
}