import classes from './classes.module.scss'

interface Props {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return <div className={classes.container}>{children}</div>
}
