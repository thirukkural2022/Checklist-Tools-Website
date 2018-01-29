"use strict";
import { h } from 'preact-cycle';
import {TOGGLE,SAVE,RESET} from "../reducers/checklist";

const Toolbar = ({checklists,selected},{mutate,mutation}) => {
  return (
        <div className="row toolbar">
          <div className="column column-40">
            <select id="checklist-select" onChange={e => mutate(TOGGLE, e.target.value)} value={selected}>
              {
                checklists.map((checklist, i) => {
                  return (<option value={i}>{checklist.name}</option>)
                })
              }
            </select>
          </div>
          <div className="column column-60">
            <div className="clearfix">
              <div className="float-right">
                <a className="button" href="#" onClick={() => window.print()}><i className="fa fa-print fa-lg" aria-hidden="true"></i>Generate report</a>
              </div>
              <div className="float-right">
                <a className="button" href="#" onClick={mutation(SAVE)}><i className="fa fa-floppy-o fa-lg" aria-hidden="true"></i>Save</a>
              </div>
              <div className="float-right">
                <a className="button" href="#" onClick={mutation(RESET,selected)}><i className="fa fa-refresh fa-lg" aria-hidden="true"></i>Reset</a>

              </div>
            </div>

          </div>
        </div>
  );
};
export default Toolbar;
