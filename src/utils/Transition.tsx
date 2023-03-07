import React, { useRef, useEffect, useContext } from "react"
import { CSSTransition as ReactCSSTransition } from "react-transition-group"

const TransitionContext = React.createContext({
  parent: {
    appear: false,
    isInitialRender: true,
    show: false,
  },
})

function useIsInitialRender() {
  const isInitialRender = useRef(true)
  useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

export interface ICSSTransitionProps {
  show?: boolean
  enter?: string
  enterStart?: string
  enterEnd?: string
  leave?: string
  leaveStart?: string
  leaveEnd?: string
  appear?: any
  unmountOnExit?: any
  tag?: any
  children?: React.ReactNode
  node?: React.MutableRefObject<HTMLElement | null>
  className?: string
  [x: string]: any
}

export function CSSTransition({
  show,
  enter,
  enterStart,
  enterEnd,
  leave,
  leaveStart,
  leaveEnd,
  appear,
  unmountOnExit,
  tag,
  children,
  ...rest
}: ICSSTransitionProps) {
  //   const enterClasses = enter!.split(" ").filter((s) => s.length)
  //   const enterStartClasses = enterStart!.split(" ").filter((s) => s.length)
  //   const enterEndClasses = enterEnd!.split(" ").filter((s) => s.length)
  //   const leaveClasses = leave!.split(" ").filter((s) => s.length)
  //   const leaveStartClasses = leaveStart!.split(" ").filter((s) => s.length)
  //   const leaveEndClasses = leaveEnd!.split(" ").filter((s) => s.length)
  const removeFromDom = unmountOnExit

  const enterClasses = splitClasses(enter)
  const enterStartClasses = splitClasses(enterStart)
  const enterEndClasses = splitClasses(enterEnd)
  const leaveClasses = splitClasses(leave)
  const leaveStartClasses = splitClasses(leaveStart)
  const leaveEndClasses = splitClasses(leaveEnd)

  //   function addClasses(node: HTMLElement, classes: string[]) {
  //     classes.length && node.classList.add(...classes)
  //   }

  //   function removeClasses(node: HTMLElement, classes: string[]) {
  //     classes.length && node.classList.remove(...classes)
  //   }

  function addClasses(ref: React.RefObject<HTMLDivElement>, classes: string[]) {
    ref.current?.classList.add(...classes)
  }

  function removeClasses(
    ref: React.RefObject<HTMLDivElement>,
    classes: string[]
  ) {
    ref.current?.classList.remove(...classes)
  }

  const nodeRef = React.useRef<HTMLDivElement>(null)
  const Component = tag

  console.log("dropdown show ", show)

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        nodeRef?.current?.addEventListener("transitionend", done, false)
      }}
      onEnter={() => {
        removeClasses(nodeRef, enterClasses)
        addClasses(nodeRef, [...enterClasses, ...enterStartClasses])
      }}
      onEntering={() => {
        removeClasses(nodeRef, enterStartClasses)
        addClasses(nodeRef, enterEndClasses)
      }}
      onEntered={() => {
        removeClasses(nodeRef, [...enterEndClasses, ...enterClasses])
      }}
      onExit={() => {
        addClasses(nodeRef, [...leaveClasses, ...leaveStartClasses])
      }}
      onExiting={() => {
        removeClasses(nodeRef, leaveStartClasses)
        addClasses(nodeRef, leaveEndClasses)
      }}
      onExited={() => {
        removeClasses(nodeRef, [...leaveEndClasses, ...leaveClasses])
        // if (!removeFromDom) nodeRef.current.style.display = "none"
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? "none" : null }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  )
}

const Transition: React.FC<ICSSTransitionProps> = ({
  show,
  enter,
  enterStart,
  enterEnd,
  leave,
  leaveStart,
  leaveEnd,
  appear,
  unmountOnExit,
  tag,
  children,
  ...rest
}: Partial<ICSSTransitionProps>) => {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    )
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}

export default Transition

function splitClasses(string: string = ""): string[] {
  return string.split(" ").filter((s) => s.length)
}
